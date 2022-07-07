export default function Image(props) {
  return (
    <>
      <article>
        <img
          className="ImgOut"
          src={props.urls.full}
          alt={props.alt_description}
        />
      </article>
    </>
  );
}
