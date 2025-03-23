import hero from "../assets/hero.jpg";
import googleLogo from "../assets/company-logo/google-logo.png";
import openAILogo from "../assets/company-logo/logo-openai.png";
import manoManoLogo from "../assets/company-logo/manomano-logo.png";
import voddafoneLogo from "../assets/company-logo/vodafone-logo.png";
import canvaLogo from "../assets/company-logo/logo-canva.png";
import BBCLogo from "../assets/company-logo/bbc.png";
import ocadoLogo from "../assets/company-logo/ocado-logo.png";

export const Advertise = () => {
  return (
    <>
      <div className="flex items-center justify-between rounded-full bg-[#0064a0] px-8 py-6 text-white">
        <p>
          <span className="font-bold">Slack is your digital HQ.</span> Meet the
          new features keeping teams connected in a work-from-anywhere world.{" "}
          <span className="font-bold underline">Let's go &rarr;</span>
        </p>
        X
      </div>

      <div className="flex h-96 justify-between px-8 py-16">
        <div className="flex w-2/5 flex-col justify-between pr-16">
          <h1 className="text-5xl font-bold">
            Slack is where the future works
          </h1>
          <p className="w-96 font-medium">
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <div className="flex items-center gap-2">
            <button className="rounded-sm bg-[#611f69] px-4 py-3 text-sm font-bold text-white">
              TRY FOR FREE
            </button>
            <div className="flex h-11 items-center gap-4 rounded-sm bg-[#2d85f0] p-1 pr-4 text-white">
              <img src={googleLogo} alt="Google Logo" width={35} />
              <button className="text-sm font-bold">SIGN UP WITH GOOGLE</button>
            </div>
          </div>
        </div>
        <div className="flex w-3/5 items-center justify-center p-28 text-right">
          <img src={hero} alt="Slack App Image" />
        </div>
      </div>

      <div className="flex items-center justify-between px-8">
        <img src={openAILogo} alt="Open AI Logo" />
        <img src={manoManoLogo} alt="Company Logo" />
        <img src={voddafoneLogo} alt="Company Logo" />
        <img src={canvaLogo} alt="Company Logo" />
        <img src={BBCLogo} alt="Company Logo" />
        <img src={ocadoLogo} alt="Company Logo" />
      </div>

      <div className="flex h-96 justify-between px-8 py-16">
        <div className="flex w-2/5 items-center justify-center text-right">
          <img src={hero} alt="Slack App Image" width={496} />
        </div>
        <div className="flex w-3/5 flex-col justify-between pr-12 pl-14">
          <h2 className="text-4xl font-medium">
            Now is your moment to build a tomorrow
          </h2>
          <p className="w-96 font-medium">
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <div>
            <button className="rounded-sm border border-solid border-[#611f69] px-4 py-3 text-sm text-[#611f69]">
              WATCH VIDEO
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
