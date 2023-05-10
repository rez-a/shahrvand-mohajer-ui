import React, { useEffect, useState } from "react";


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
    <div className="w-full fixed bottom-0 left-0 z-50 bg-neutral-900 rounded-t-2xl">
        <button
        className="px-5 py-3 text-white justify-between flex items-center gap-3"
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        onClick={onClick}
        >
            <div className="w-16 h-16">
                <img src="./logo192.png" />
            </div>
            <h4 className="text-base font-bold">
            دانلود اپلیکیشن مهاجران شاپ    
            </h4>
        </button>
    </div>
  );
};

export default InstallPWA;