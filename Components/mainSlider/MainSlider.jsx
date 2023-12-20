// /** @format */

// import React, { useContext, useEffect, useState } from 'react'
// import styles from './MainSlider.module.css'
// import 'react-image-gallery/styles/css/image-gallery.css'
// import ReactImageGallery from 'react-image-gallery'
// import Context from '@/contextApi/Context'

// const MainSlider = () => {
//   const { mainSliderImages } = useContext(Context)


//   const renderLeftNav = (onClick, disabled) => (
//     <button
//       type="button"
//       className={`image-gallery-icon image-gallery-left-nav ${
//         disabled ? 'disabled' : ''
//       }`}
//       onClick={onClick}
//       disabled={disabled}
//       >
//       <img
//         width="50"
//         height="50"
//         className={styles['arrow-left']}
//         src="https://img.icons8.com/ios/50/left--v1.png"
//         alt="left--v1"
//         />
//     </button>
//   )

//   const renderRightNav = (onClick, disabled) => (
//     <button
//       type="button"
//       className={`styles['arrow-right '] image-gallery-icon image-gallery-right-nav ${disabled ? 'disabled' : ''}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       <img
//         width="50"
//         height="50"
//         className={styles['arrow-right']}
//         src="https://img.icons8.com/ios/50/right--v1.png"
//         alt="right--v1"
//       />
//     </button>
//   )

//   return (
//     <>
//       <div className={styles['main']}>
//         <ReactImageGallery
//           items={mainSliderImages.map((item) => ({
//             original: item.original,
//           }))}
//           autoPlay={true}
//           showPlayButton={false}
//           renderLeftNav={renderLeftNav}
//           renderRightNav={renderRightNav}
//           showFullscreenButton={false}
//           isRTL={true}
//         />
//       </div>
//     </>
//   )

// }

// export default MainSlider
