Start-Process powershell -ArgumentList '-NoExit','-Command','cd modules/emergency-reporting-engine; npm install; npm run dev'
Start-Process powershell -ArgumentList '-NoExit','-Command','cd modules/responder-command-center; npm install; npm run dev'
Start-Process powershell -ArgumentList '-NoExit','-Command','cd modules/campus-safety-intelligence; npm install; npm run dev'
