import { quotesDB } from "../../database/quotes";
import { QuotesWrapper } from "../style/Elements";

const randomQuotes = () => {
  const randomNum = Math.floor(Math.random() * quotesDB.length);
  return quotesDB[randomNum];
};
const Quotes = () => {
  const quote = randomQuotes();
  return (
    <QuotesWrapper>
      <h1>{quote.quoteText}</h1>
      <p>-{quote.quoteAuthor}</p>
    </QuotesWrapper>
  );
};
export default Quotes;
