@echo off
setlocal
cd /d "%~dp0"
if not exist node_modules\next\package.json (
  echo First-time setup: installing website dependencies automatically...
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
)
echo Starting SVU Developers website...
call npm run dev
pause
