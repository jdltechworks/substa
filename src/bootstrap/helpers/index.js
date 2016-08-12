export const domOnlyProps = ({
  initialValue,
  autofill,
  onUpdate,
  valid,
  invalid,
  dirty,
  pristine,
  active,
  touched,
  visited,
  autofilled,
  asyncValidating,
  error,
  name,
  ...domProps }) => domProps;

export const END_POINT = () => {
  let api = ''
  if(_.eq(process.env.NODE_ENV, 'production')) {
    api = '//subasta-jdltechworks.rhcloud.com/api';
  } else {
    api = '//localhost:8000/api';
  }

  return api;
}