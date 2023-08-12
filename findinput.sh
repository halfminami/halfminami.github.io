#!/bin/bash
# listing all html files into ts file

ts="inputs.ts"
htmls=$(find . -name "*.html" -a -not -path "./dist*")

echo "writing out"
echo ${htmls}
echo "to"
echo "'${ts}'"
read -p "ok? (y)" a

if [ ! ${a} == "y" ]; then
    echo "exit."
    exit 0
fi

echo "" > ${ts}

echo "// findinput.sh" > ${ts}
echo "export const inputs = {" >> ${ts}

for file in ${htmls}; do
rootpath=$(echo ${file} | sed 's/\.\///')
echo "  '${rootpath}': '${rootpath}'," >> ${ts}
done

echo "};" >> ${ts}

echo "done."
