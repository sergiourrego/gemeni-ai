const Response = ({ response }: { response: string }) => {
    return (
      <div className="flex flex-col gap-2">
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    );
  };

  export default Response;