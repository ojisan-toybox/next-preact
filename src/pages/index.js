export default (props) => {
  return (
    <div>
      hello world <button>a</button>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  return { props: { d: 1 } };
};
