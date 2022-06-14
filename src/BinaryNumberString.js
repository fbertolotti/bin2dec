function BinaryNumberString(props) {
  return (
    <div>
      binary number string:
      <input
        maxLength={props.maxLength || 8}
        value={props.value}
        onChange={(event) => props.onComponentChange(event.target.value)}
      />
    </div>
  );
}

export default BinaryNumberString
