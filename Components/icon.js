import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

export default class Icon extends Component {
 /**
  * Liste les pictogrames disponibles en faisant correspondre un nom à chaque code UTF8
  */
 static icons = {
   'yellow': '\u{e907}',
   'cloche': '\u{e901}',
   'soccer': '\u{e904}',
   'star': '\u{e912}',
 };

 /**
  * On crée un style de base qui utilise notre police personnalisée
  */
 static styles = StyleSheet.create({
   icon: {
     fontFamily: 'testIcon',
   },
 });

 static propTypes = () => ({
   // On déclare une propType "icon" qui servira à sélectionner le pictogramme
   icon: PropTypes.oneOf(Object.keys(Icon.icons)).isRequired,
   // On reprend la propType "style" du composant Text
   style: Text.propTypes.style,
 });

 /**
  * Certaines propriétés CSS font bugger l'affichage des polices personnalisées sur Android.
  * Nous préférons donc les exclure des styles à appliquer au pictogramme.
  */
 safeIconStyle(styles) {
   const style = StyleSheet.flatten(styles);

   delete style.fontWeight;

   return style;
 }

 /**
  * On rend un composant Text contenant le pictogramme demandé
  */
 render() {
   const { icons, styles } = this.constructor;
   const { icon, style } = this.props;

   return <Text style={this.safeIconStyle([styles.icon, style])}>{icons[icon]}</Text>;
 }
}
