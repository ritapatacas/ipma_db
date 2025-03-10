@echo off

:: Go to correct drive
D:
cd D:\dev\apps\ipma_db\app

:: Set the path for the log file
set LOG_DIR=D:\dev\apps\ipma_db\auto_script_logs

:: Get the current timestamp YYYY-MM-DD_HH-MM-SS
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set date=%%d-%%b-%%c
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set time=%%a-%%b
set timestamp=%date%_%time%
set timestamp=%timestamp::=-%

:: Create the log folder if it doesn't exist
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

:: Clear any previous log file from the last execution
echo. > "%LOG_DIR%\log_%timestamp%.txt"

:: Log the start of the script execution
echo "Script execution started" >> "%LOG_DIR%\log_%timestamp%.txt"

:: Run the Python script and capture output
echo "Running Python script..." >> "%LOG_DIR%\log_%timestamp%.txt"
python analyze.py >> "%LOG_DIR%\log_%timestamp%.txt" 2>&1

:: Log custom message after the script runs
echo "TADAHHHH, see ya next time" >> "%LOG_DIR%\log_%timestamp%.txt"

pause
