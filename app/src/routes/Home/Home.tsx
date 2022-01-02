import React from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { Textbox } from "../../components/Textbox";
import locales from "../../config/locales";
import { PiDetails } from "../../interfaces/PiDetails";
import { generateNewPi, resetPi } from "../../service/pi.service";

export default class Home extends React.Component {
  // Initial State
  state = {
    isLoading: true,
    pi: "0",
    sunCircumference: "0",
  };

  componentDidMount = () => {
    this.resetPiValue();
  };

  resetPiValue = () => {
    this.setState(
      {
        isLoading: true,
      },
      async () => {
        try {
          const resetPiRes = (await resetPi()) as PiDetails;
          this.setState({
            isLoading: false,
            pi: resetPiRes.pi,
            sunCircumference: resetPiRes.sunCircumference,
          });
        } catch (err: any) {
          this.displayError();
        }
      }
    );
  };

  generateNewPiValue = () => {
    this.setState(
      {
        isLoading: true,
      },
      async () => {
        try {
          const generateNewPiRes = (await generateNewPi()) as PiDetails;
          this.setState({
            isLoading: false,
            pi: generateNewPiRes.pi,
            sunCircumference: generateNewPiRes.sunCircumference,
          });
        } catch (err: any) {
          this.displayError();
        }
      }
    );
  };

  displayError = () => {};

  render = () => {
    const { isLoading, pi, sunCircumference } = this.state;
    const {
      labelHomeTitle,
      labelHomePi,
      labelHomeSunCircumference,
      buttonHomeGenerateNewPi,
      buttonHomeResetPi,
      labelCopyright,
    } = locales;

    return (
      <div className="home-wrapper">
        <Loading isLoading={isLoading} />
        <div className="modal">
          <div className="home-title">{labelHomeTitle}</div>
          <Textbox label={labelHomePi} value={pi} />
          <Textbox label={labelHomeSunCircumference} value={sunCircumference} />
          <div className="button-wrapper">
            <Button
              label={buttonHomeGenerateNewPi}
              handleButtonClick={() => this.generateNewPiValue()}
            />
            <Button
              label={buttonHomeResetPi}
              handleButtonClick={() => this.resetPiValue()}
            />
          </div>
        </div>
        <Footer labelFooter={labelCopyright} />
      </div>
    );
  };
}
