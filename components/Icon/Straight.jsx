/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

import { Path, Use, G, Text } from 'react-native-svg';

import { blackColor, redColor } from '../../constants/colors';

import { Sprite } from './Sprite';
import { styles } from './styles';

export const Straight = ({ width, height }) => (
  <Sprite height={height} width={width}>
    <Use href="#card" transform="matrix(.84066,-.38265,.38265,.84066,8596.77,35049.1)" />
    <G fill={blackColor}>
      <Text
        style={styles.text}
        transform="matrix(.91015,-.41428,.41428,.91015,-100765,26367.8)"
        x="100000"
        y="65000"
      >
        3
      </Text>
      <Path d="m22223 46922c105-1110-1053-1948-2088-1477-1034 471-1163 1894-257 2544-823 283-1231 1215-869 2011 617 1354 2647 1048 2816-444 186 620 222 1260 152 1536l1208-549c-255-129-714-577-1059-1124 1236 853 2800-478 2184-1831-362-796-1333-1101-2087-666" />
    </G>
    <Use href="#card" transform="matrix(.9039,-.19002,.19002,.9039,33541.6,20217.6)" />
    <Text
      fill={blackColor}
      style={styles.text}
      transform="matrix(.97861,-.20573,.20573,.97861,-71245.8,-12124.2)"
      x="100000"
      y="65000"
    >
      4
    </Text>
    <G fill={redColor}>
      <Path d="m45592 35253l-1749 3851-3153-2819 1751-3851z" />
      <Path d="m57057 33324l-3061 6739-5517-4934 3063-6739z" />
      <Path d="m68458 87560l-3061 6738-5517-4934 3063-6739z" />
    </G>
    <Use href="#card" transform="matrix(.91782,-.10366,.10366,.91782,62671.4,15115.7)" />
    <G fill={blackColor}>
      <Text
        style={styles.text}
        transform="matrix(.99368,-.11223,.11223,.99368,-38600.5,-26991.9)"
        x="100000"
        y="65000"
      >
        5
      </Text>
      <Path d="m70397 28322c895 558 2143 1647 2810 2462 1902 2301-869 3907-2090 2298 156 603 400 1139 706 1527l-1413 160c212-447 330-1024 348-1646-831 1840-3891 893-2551-1774 469-944 1443-2284 2190-3027" />
      <Path d="m79857 25309c1565 977 3750 2883 4918 4309 3327 4028-1523 6837-3659 4022 272 1055 700 1993 1235 2672l-2472 279c371-781 578-1791 609-2880-1455 3221-6809 1564-4464-3104 820-1651 2525-3997 3833-5298" />
      <Path d="m86077 80380c1565 976 3750 2882 4918 4308 3327 4028-1523 6838-3659 4022 272 1055 700 1993 1236 2672l-2473 280c371-782 578-1792 608-2881-1454 3221-6808 1564-4463-3104 820-1651 2525-3997 3833-5297" />
    </G>
    <Use href="#card" transform="matrix(.92359,.0109,-.0109,.92359,91538.7,12632.7)" />
    <G fill={blackColor}>
      <Text style={styles.text} transform="matrix(.99993,.0118,-.0118,.99993,-3765.67,-41703)" x="100000" y="65000">
        6
      </Text>
      <Path d="m97568 26695c819 664 1923 1900 2483 2791 1602 2519-1347 3769-2359 2021 80 618 256 1180 511 1603l-1421-17c265-417 454-974 549-1590-1053 1723-3972 404-2311-2076 581-878 1714-2087 2548-2732" />
      <Path d="m107328 24878c1432 1163 3364 3325 4346 4885 2802 4409-2358 6596-4129 3537 139 1081 447 2065 895 2805l-2488-29c465-730 796-1706 961-2783-1843 3015-6951 708-4045-3634 1018-1536 3001-3652 4460-4781" />
      <Path d="m107001 52586c1432 1163 3364 3325 4346 4885 2802 4409-2358 6596-4129 3537 139 1081 447 2065 895 2805l-2488-29c465-730 796-1706 961-2783-1843 3016-6951 708-4045-3634 1018-1536 3001-3652 4460-4781" />
      <Path d="m106674 80295c1432 1162 3364 3325 4346 4885 2803 4409-2358 6595-4129 3537 140 1081 447 2064 895 2805l-2488-30c465-730 796-1706 961-2783-1843 3016-6950 708-4045-3633 1018-1537 3001-3653 4460-4781" />
    </G>
    <Use href="#card" transform="matrix(.87781,.28739,-.28739,.87781,129219,17038.9)" />
    <Text
      fill={blackColor}
      style={styles.text}
      transform="matrix(.95036,.31114,-.31114,.95036,54711.3,-63340.7)"
      x="100000"
      y="65000"
    >
      7
    </Text>
    <G fill={redColor}>
      <Path d="m131813 33250c-690-226-1434 151-1659 840 225-689-150-1432-839-1658-692-226-1434 151-1659 840-340 1039 1292 4500 1292 4500 0 0 3366-1825 3706-2864 226-688-151-1432-841-1658" />
      <Path d="m149805 66530c-1262-413-2623 276-3035 1535 412-1259-275-2618-1535-3031-1264-414-2622 276-3034 1536-622 1901 2364 8231 2364 8231 0 0 6156-3337 6778-5238 413-1260-276-2620-1538-3033" />
      <Path d="m174228 45369c-1262-413-2623 275-3035 1535 412-1260-275-2619-1535-3032-1265-413-2622 277-3035 1536-622 1901 2364 8231 2364 8231 0 0 6157-3337 6779-5238 412-1259-276-2619-1538-3032" />
      <Path d="m165606 71703c-1262-413-2623 276-3035 1535 412-1259-275-2618-1535-3031-1265-414-2622 276-3034 1535-623 1902 2364 8232 2364 8232 0 0 6156-3337 6778-5238 412-1260-276-2620-1538-3033" />
      <Path d="m156984 98038c-1262-413-2623 276-3035 1535 412-1259-275-2618-1535-3031-1264-414-2622 276-3034 1536-623 1900 2364 8231 2364 8231 0 0 6156-3337 6778-5238 413-1260-276-2620-1538-3033" />
      <Path d="m160274 107333c690 226 1434-151 1659-839-225 688 150 1431 839 1657 692 226 1434-151 1659-840 340-1039-1292-4500-1292-4500 0 0-3366 1825-3706 2864-226 689 151 1432 841 1658" />
      <Path d="m134004 61357c-1262-413-2622 276-3035 1535 413-1259-274-2618-1534-3031-1265-414-2623 276-3035 1536-622 1900 2364 8231 2364 8231 0 0 6156-3337 6779-5238 412-1260-277-2620-1539-3033" />
      <Path d="m142626 35023c-1262-414-2623 275-3035 1535 412-1260-275-2619-1535-3031-1264-415-2622 275-3034 1535-622 1901 2364 8231 2364 8231 0 0 6156-3337 6778-5238 413-1260-276-2619-1538-3032" />
      <Path d="m125383 87692c-1262-413-2623 276-3036 1535 413-1259-274-2618-1534-3031-1265-414-2622 276-3035 1535-622 1902 2364 8232 2364 8232 0 0 6156-3337 6779-5239 412-1259-276-2619-1538-3032" />
    </G>
    <Text
      fill={blackColor}
      style={styles.text}
      transform="matrix(-.95036,-.31114,.31114,-.95036,237376,203924)"
      x="100000"
      y="65000"
    >
      7
    </Text>
  </Sprite>
);

Straight.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
