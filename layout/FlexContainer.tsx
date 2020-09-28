const FlexContainer = (props) => (
  <div className={`flex flex-col ${props.className ?? ''}`}>
    {props.children}
  </div>
)

export default FlexContainer
