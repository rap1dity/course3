@echo off
echo -- строка параметров: %1 %2 %3
echo -- параметр 1: %1
echo -- параметр 2: %2
echo -- параметр 3: %3
@set /a sum=%1+%2
@set /a multiply=%1*%2
@set /a divide=%3/%2
@set /a diff=%2-%1
@set /a exp=(%2-%1)*(%1-%2)
echo -- %1 + %2 = %sum%
echo -- %1 * %2 = %multiply%
echo -- %3 / %2 = %divide%
echo -- %2 - %1 = %diff%
echo -- (%2 - %1)*(%1 - %2) = %exp%
