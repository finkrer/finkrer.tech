const ContentContainer = ({ children, className }) => (
  <div className={className}>
    <div className="mx-auto px-3 max-w-2xl">{children}</div>
  </div>
)

export default ContentContainer
