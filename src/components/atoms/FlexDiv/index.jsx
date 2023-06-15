import './index.scss';

const FlexDiv = ({children, additionalClassName, id}) => {
  return (
    <div className={`flex-div ${additionalClassName}`} id={id}>
      {children}
    </div>
  );
}

export default FlexDiv;