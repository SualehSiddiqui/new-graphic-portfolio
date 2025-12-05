import { useEffect, useState } from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { SvgComponent } from "../../Components";
import { ImCross } from "react-icons/im";
import HTMLFlipBook from "react-pageflip";

import book1Page1 from '../../Assets/ComicBook/Book1/page1.png';
import book1Page2 from '../../Assets/ComicBook/Book1/page2.png';
import book1Page3 from '../../Assets/ComicBook/Book1/page3.png';
import book1Page4 from '../../Assets/ComicBook/Book1/page4.png';
import book1Page5 from '../../Assets/ComicBook/Book1/page5.png';
import book1Page6 from '../../Assets/ComicBook/Book1/page6.png';
import book1Page7 from '../../Assets/ComicBook/Book1/page7.png';
import book1Page8 from '../../Assets/ComicBook/Book1/page8.png';
import book1Page9 from '../../Assets/ComicBook/Book1/page9.png';

// ComicBook Book2
import book2Page1 from '../../Assets/ComicBook/Book2/page1.png';
import book2Page2 from '../../Assets/ComicBook/Book2/page2.png';
import book2Page3 from '../../Assets/ComicBook/Book2/page3.png';
import book2Page4 from '../../Assets/ComicBook/Book2/page4.png';
import book2Page5 from '../../Assets/ComicBook/Book2/page5.png';
import book2Page6 from '../../Assets/ComicBook/Book2/page6.png';
import book2Page7 from '../../Assets/ComicBook/Book2/page7.png';
import book2Page8 from '../../Assets/ComicBook/Book2/page8.png';
import book2Page9 from '../../Assets/ComicBook/Book2/page9.png';
import book2Page10 from '../../Assets/ComicBook/Book2/page10.png';
import book2Page11 from '../../Assets/ComicBook/Book2/page11.png';
import book2Page12 from '../../Assets/ComicBook/Book2/page12.png';
import book2Page13 from '../../Assets/ComicBook/Book2/page13.png';
import book2Page14 from '../../Assets/ComicBook/Book2/page14.png';
import book2Page15 from '../../Assets/ComicBook/Book2/page15.png';

// ComicBook Book3
import book3Page1 from '../../Assets/ComicBook/Book3/page1.png';
import book3Page2 from '../../Assets/ComicBook/Book3/page2.png';
import book3Page3 from '../../Assets/ComicBook/Book3/page3.png';
import book3Page4 from '../../Assets/ComicBook/Book3/page4.png';
import book3Page5 from '../../Assets/ComicBook/Book3/page5.png';
import book3Page6 from '../../Assets/ComicBook/Book3/page6.png';
import book3Page7 from '../../Assets/ComicBook/Book3/page7.png';
import book3Page8 from '../../Assets/ComicBook/Book3/page8.png';
import book3Page9 from '../../Assets/ComicBook/Book3/page9.png';
import book3Page10 from '../../Assets/ComicBook/Book3/page10.png';
import book3Page11 from '../../Assets/ComicBook/Book3/page11.png';
import book3Page12 from '../../Assets/ComicBook/Book3/page12.png';
import book3Page13 from '../../Assets/ComicBook/Book3/page13.png';
import book3Page14 from '../../Assets/ComicBook/Book3/page14.png';
import book3Page15 from '../../Assets/ComicBook/Book3/page15.png';
import book3Page16 from '../../Assets/ComicBook/Book3/page16.png';
import book3Page17 from '../../Assets/ComicBook/Book3/page17.png';

// ComicBook Book3
import book4Page1 from '../../Assets/ComicBook/Book4/page1.png';
import book4Page2 from '../../Assets/ComicBook/Book4/page2.png';
import book4Page3 from '../../Assets/ComicBook/Book4/page3.png';
import book4Page4 from '../../Assets/ComicBook/Book4/page4.png';
import book4Page5 from '../../Assets/ComicBook/Book4/page5.png';
import book4Page6 from '../../Assets/ComicBook/Book4/page6.png';

const dataComicBook = {
  Book1: [
    book1Page1, book1Page2, book1Page3, book1Page4, book1Page5,
    book1Page6, book1Page7, book1Page8, book1Page9
  ],
  Book2: [
    book2Page1, book2Page2, book2Page3, book2Page4, book2Page5,
    book2Page6, book2Page7, book2Page8, book2Page9, book2Page10,
    book2Page11, book2Page12, book2Page13, book2Page14, book2Page15
  ],
  Book3: [
    book3Page1, book3Page2, book3Page3, book3Page4, book3Page5,
    book3Page6, book3Page7, book3Page8, book3Page9, book3Page10,
    book3Page11, book3Page12, book3Page13, book3Page14, book3Page15,
    book3Page16, book3Page17
  ],
  Book4: [
    book4Page1, book4Page2, book4Page3, book4Page4, book4Page5,
    book4Page6
  ]
};

const ComicBookViewer = ({ value }) => {
  const [bookKey, setBookKey] = useState(0);

  // Update key to force re-render
  useEffect(() => {
    setBookKey(prevKey => prevKey + 1);
  }, [value]);

  return (
    <>
      <HTMLFlipBook
        key={bookKey}
        width={300}
        height={500}
        showCover={true}
        className="mt-3"
        style={{ height: '500px', width: '300px' }}
      >
        {value.map((v, i) => (
          <div className={i === 0 ? "demoPage demo-page-1" : "demoPage"} key={i}>
            <img src={v} alt={`img-${i}`} />
          </div>
        ))}
      </HTMLFlipBook>
    </>
  );
};


const ComicBook = ({ windowWidth }) => {
  const [comicToggleValue, setComicToggleValue] = useState(false);
  const [comicValue, setComicValue] = useState([]);

  const books = Object.entries(dataComicBook);

  const [visibleCount, setVisibleCount] = useState(2);

  const loadMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  return (
    <div className="main-img-div" id='comicBook'>
      <h1>
        <p data-aos="fade-right" data-aos-duration={600} >
          Comic Book
        </p>
        <SvgComponent />
      </h1>

      {/* MOBILE VERSION */}
      {windowWidth < 768 ? (
        <Container className="comic-container">
          {books.slice(0, visibleCount).map(([key, value]) => (
            <ComicBookViewer key={key} value={value} />
          ))}

          {visibleCount < books.length && (
            <div className="load-more-wrapper">
              <button className="load-more-btn" onClick={loadMore}>
                Load More
              </button>
            </div>
          )}
        </Container>
      ) : (
        /* DESKTOP VERSION */
        <Container className="comic-container">

          {books.slice(0, visibleCount).map(([key, value]) => (
            <div key={key}>
              <input
                type="checkbox"
                checked={comicToggleValue}
                id="comic-toggle"
                onChange={() => setComicToggleValue(!comicToggleValue)}
              />

              <label
                onClick={() => setComicValue(value)}
                htmlFor="comic-toggle"
                className="comic-preview demo-page demo-page-1"
              >
                <img src={value[0]} alt="img" />
              </label>
            </div>
          ))}

          {visibleCount < books.length ?
            <div className="load-more-btn-wrapper">
              <button className="load-more-btn" onClick={e => setVisibleCount(prev => prev + 2)}>
                Load More
              </button>
            </div> :
            <div className="load-more-btn-wrapper">
              <button className="load-more-btn" onClick={e => setVisibleCount(2)}>
                Hide
              </button>
            </div>
          }

          <div className="comic-book-div">
            <div>
              <span onClick={() => setComicToggleValue(false)}>
                <ImCross />
              </span>

              <ComicBookViewer key={0} value={comicValue} />
            </div>
          </div>

        </Container>
      )}
    </div>
  );
};


export default ComicBook