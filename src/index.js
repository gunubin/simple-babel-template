/* @flow */

type Props = {
  message: string
};

const helloWorld = (props: Props) => {
  // eslint-disable-next-line no-console
  console.log(props.message);
};

export default helloWorld;
