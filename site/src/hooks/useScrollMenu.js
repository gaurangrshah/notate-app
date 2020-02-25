import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { throttle } from 'lodash'
import $ from 'jquery'

const propTypes = {
  SCROLL_THRESHOLD: PropTypes.number.isRequired,
};

export function useScrollMenu(SCROLL_THRESHOLD) {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [passedScrollThreshold, setPassedScrollThreshold] = useState(false);
  const toggleIsHeaderMenuOpen = () => setIsHeaderMenuOpen(!isHeaderMenuOpen);

  const watchYScroll = throttle((e) => {
    const scrollPos = $(document).scrollTop();

    if (scrollPos > SCROLL_THRESHOLD) {
      setPassedScrollThreshold(true)
    } else {
      setPassedScrollThreshold(false)
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', watchYScroll);

    return () => {
      window.removeEventListener('scroll', watchYScroll);
    };
  }, [watchYScroll]);

  return { isHeaderMenuOpen, toggleIsHeaderMenuOpen, passedScrollThreshold }
}

useScrollMenu.propTypes = propTypes;
