export default (props) => {
  if (props.rendered) {
    return props.children
  } else return false
}
