import React from 'react';

export default function Icon(props) {
  const {
    type,
    width = 12,
    height = 12,
    fill = '#000',
    className
  } = props;
  switch (type) {
    case 'pause':
      return (
        <svg width={width} height={height} viewBox="0 0 357 357" fill={fill} className={className}>
          <g>
            <g id="pause">
              <path d="M25.5,357h102V0h-102V357z M229.5,0v357h102V0H229.5z"/>
            </g>
          </g>
        </svg>
      );
    case 'play':
      return (
        <svg width={width} height={height} viewBox="0 0 41.999 41.999" fill={fill} className={className}>
          <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
            c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
            c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"
          />
        </svg>
      );
    case 'loader':
      return (
        <svg width={width} height={height} viewBox="0 0 38 38"stroke={fill} className={className}>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      )
    case 'search':
      return (
        <svg viewBox="0 0 512 512" width={width} height={height} fill={fill} className={className}>
          <g>
            <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"/>
          </g>
        </svg>
      )
    case 'heart':
      return (
        <svg viewBox="0 0 471.701 471.701" width={width} height={height} fill={fill} className={className}>
          <g>
            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
              c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
              l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
              C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
              s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
              c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
              C444.801,187.101,434.001,213.101,414.401,232.701z"/>
          </g>
        </svg>
      )
    case 'heart-fill':
      return (
        <svg viewBox="0 0 492.719 492.719" width={width} height={height} fill={fill} className={className}>
          <g>
            <g id="Icons_18_">
              <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569
                c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178
                l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553
                C474.988,241.811,492.719,206.017,492.719,166.008z"/>
            </g>
          </g>
        </svg>
      )
    default:
      return null;
  }
}