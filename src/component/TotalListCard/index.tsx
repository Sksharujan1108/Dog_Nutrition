import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface TotalListCardProps {
    subTotal?: string
    shipping?: string
    total?: string
}

const TotalListCard = (props: TotalListCardProps) => {
  const { subTotal, shipping, total } = props;
  return (
    <View  style={styles.container}>
      {/* Subtotal */}
      <View style={styles.common_row_container}>
        <Text style={styles.common_text}>{'Subtotal :'}</Text>
        <Text style={styles.common_text}>Rs. {subTotal}</Text>
      </View>
      {/* Shipping: */}
      <View style={styles.common_row_container}>
        <Text style={styles.common_text}>{'Shipping :'}</Text>
        <Text style={styles.common_text}>Rs. {shipping}</Text>
      </View>
      {/* Total: */}
      <View style={styles.common_row_container}>
        <Text style={styles.total_text}>{'Total Price :'}</Text>
        <Text style={styles.total_price}>Rs. {total}</Text>
      </View>
    </View>
  )
}

export default TotalListCard;