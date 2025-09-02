@echo off
echo Setting up GitHub push for BILLYRACXX website...
echo.

echo Current git status:
git status
echo.

echo Remote URL:
git remote -v
echo.

echo Attempting to push to GitHub...
echo If prompted, please enter your GitHub username and password/token
echo.

git push -u origin master

echo.
echo Push completed! Check https://github.com/basedlsg/Billysite
pause
