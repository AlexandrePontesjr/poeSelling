function StarIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 576 512"
      height="2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
    </svg>
  );
}

const styles = {
  stars:
    "text-gray-300 has-[:checked]:text-red-900 transition-all duration-300 ease-in",
  radioStars: "appearance-none",
};

const Rating = () => {
  return (
    <div className="flex items-center">
      <label className={` ${styles.stars} `} htmlFor="star5" title="text">
        <StarIcon fill="currentColor" />
        <input
          className={` ${styles.radioStars}`}
          type="radio"
          id="star5"
          name="rate"
          value="5"
        />
      </label>
      <label className={` ${styles.stars} `} htmlFor="star4" title="text">
        <StarIcon fill="currentColor" />
        <input
          className={` ${styles.radioStars} `}
          type="radio"
          id="star4"
          name="rate"
          value="4"
        />
      </label>
      <label className={` ${styles.stars} `} htmlFor="star3" title="text">
        <StarIcon fill="currentColor" />
        <input
          className={` ${styles.radioStars} `}
          type="radio"
          id="star3"
          name="rate"
          value="3"
        />
      </label>
      <label className={` ${styles.stars} `} htmlFor="star2" title="text">
        <StarIcon fill="currentColor" />
        <input
          className={` ${styles.radioStars} `}
          type="radio"
          id="star2"
          name="rate"
          value="2"
        />
      </label>
      <label className={` ${styles.stars} `} htmlFor="star1" title="text">
        <StarIcon fill="currentColor" />
        <input
          className={` ${styles.radioStars} `}
          type="radio"
          id="star1"
          name="rate"
          value="1"
        />
      </label>
    </div>
  );
};

export default Rating;
