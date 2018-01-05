var React = require('react');
var ListItem = require('./ListItem.jsx');
var createReactClass = require('create-react-class');

var ingredient = [{"id": 1, "text": "piletina"}, {"id": 2, "text": "sir"}, {"id": 3, "text": "tortilla"}];

var List = createReactClass({
    render: function(){
        var ListItems = ingredient.map(function (item) {
            return <ListItem key={item.id} ingredient={item.text}/>;
        });
        return (<ul>{ListItems}</ul>);
    }
});

module.exports = List;