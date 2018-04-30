//You pass in a String, and if it doesn’t equal ‘cow’, it’ll throw.
//That’s bad because once you go to using the async/await syntax,
//you now are forcing users to use a try/catch.
// to see the effect debug the code with debugging points in lines 14 and 15

const maybeCowBad = cow =>
  new Promise(
    (success, failure) =>
      cow === "cow"
        ? success("it is a cow")
        : failure(`it's not a cow, it is: ${cow}`)
  );

maybeCowBad("cow").then(result => console.log("result maybeBad:", result));
maybeCowBad("donkey").then(result => console.log("result cow maybeBad:", result)).catch(error => console.error("error maybeBad:", error));

// Instead, you either create a Promise that always succeeds:

const maybeCow = cow =>
  new Promise(
    success =>
      cow === "cow"
        ? success({ ok: true, data: "it is a cow" })
        : success({ ok: false, error: `it's not a cow, it is: ${cow}` })
  );

maybeCow("cow").then(result => console.log("result maybeCow:", result));
maybeCow("chicken").then(result => console.log("result maybeCow:", result));

const maybeCowAsyncFailure = async () => {
    const {ok, error, data} = await maybeCow("chicken");
    console.log("ok async fail:", ok);
    console.log("error async fail:", error);
    console.log("data async fail:", data);
}

maybeCowAsyncFailure();

const maybeCowAsyncSuccess = async () => {
    const {ok, error, data} = await maybeCow("cow");
    console.log("ok async success:", ok);
    console.log("error async success:", error);
    console.log("data async success:", data);
}

maybeCowAsyncSuccess();