To find Odd or Even number

#!/bin/bash
echo "Enter a number"
read n
if [ $((number %2)) -eq 0 ];
then
    echo "The number is EVEN"
else
    echo "NOT EVEN"
fi

________________________________
echo "Enter a number"
read n 
if [ $((number%2)) -ne 0 ];
then
    echo "This is ODD number"
else
    echo "Not ODD number"
fi
______________________________
Swapping variables

x=5
y=10
temp=$5
x=$y
y=$temp

echo "After Swapping"

echo "First no: $x"
echo "Second no: $y"
