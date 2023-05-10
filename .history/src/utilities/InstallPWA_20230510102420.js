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
    <div className="w-full fixed bottom-0 left-0 z-50 bg-slate-800 rounded-t-2xl">
        <button
        className="px-5 py-3 text-white flex items-center gap-3 w-full h-full"
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
    </div>
  );
};

export default InstallPWA;