import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    get image () {
        const { data: { illustration }} = this.props;
        return (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle }} = this.props;
        return (
            <View style={styles.slideInnerContainer}>
                <View style={[styles.imageContainer]}>
                    { this.image }
                </View>
                <View style={[styles.textContainer]}>
                    <Text  style={[styles.title]} numberOfLines={2}>
                        { title.toUpperCase() }
                    </Text>
                    <Text style={[styles.subtitle]} numberOfLines={2}>
                        { subtitle }
                    </Text>
                </View>
            </View>
        );
    }
}
