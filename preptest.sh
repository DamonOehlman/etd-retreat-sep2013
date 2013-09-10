if [ ${#@} == 0 ]; then
  echo "please specify the language variant being tested"; exit 1
fi

TEST_SCRIPT=`basename $0`
EXERCISE=$1/bin/$TEST_SCRIPT

source assert.sh