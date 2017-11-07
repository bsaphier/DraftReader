import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class ArticleContainer extends Component {
    render () {
        return (
            <View>
                <Text>DraftReader</Text>
            </View>
        )
    }
}

const mapStateToProps = ({ articles }) => ({
    articles
});


export default connect(mapStateToProps)(ArticleContainer);
