if [ -f $PWD/write.js ]; then
    echo "$PWD/write.js File found!"
    node $PWD/write.js
    cd $PWD/../../..
    commitizen init cz-conventional-changelog --save-dev --save-exact --force
else
    echo "$PWD/write.js File not found"
fi
