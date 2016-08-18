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
  let api = '//localhost:8000/api'
  if(_.eq(process.env.NODE_ENV, 'production')) {
    api = '//subasta-jdltechworks.rhcloud.com/api';
  }
  console.log(api);
  console.log(process.env.NODE_ENV);
  return api;
}
