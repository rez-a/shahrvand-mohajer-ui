import React, { useEffect, useState } from "react";
import Logo from "assets/images/logo192.png";


const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

//   useEffect(() => {
//     const handler = e => {
//       e.preventDefault();
//       setSupportsPWA(true);
//       setPromptInstall(e);
//     };
//     window.addEventListener("beforeinstallprompt", handler);

//     return () => window.removeEventListener("transitionend", handler);
//   }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
//   if (!supportsPWA) {
//     return null;
//   }
  return (
    <div className="w-full fixed bottom-0 left-0 z-50 p-3">
        <div className="bg-slate-800  flex overflow-hidden rounded-xl">
            <button
            className="px-5 py-3 text-white flex items-center gap-3 w-full h-full hover:bg-opacity-30"
            aria-label="Install app"
            title="Install app"
            onClick={onClick}
            >
                <div className="w-14 h-14 rounded-xl overflow-hidden">
                    <img src={Logo} />
                </div>
                <h4 className="text-sm font-bold">
                دانلود اپلیکیشن مهاجران شاپ    
                </h4>
            </button>
            <button className="text-white mr-auto px-5 hover:opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
            </button>
        </div>
    </div>
  );
};

export default InstallPWA;