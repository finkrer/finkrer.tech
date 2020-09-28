const ContentContainer = ({ children, className }) => (
  <div className={className}>
    <div className="px-3 mx-auto optimal-text-width">{children}</div>
  </div>
)

export default ContentContainer
