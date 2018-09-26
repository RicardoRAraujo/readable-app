import React, { Component } from 'react'
import { searchCategories } from './categoriesActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

class Categories extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.searchCategories()
  }

  renderRows() {
    let categories = this.props.category
    //console.log(list)
    return categories.map(category => (
      <div className="col-md-1" key={category.path} >
        <Link to={`/${category.name}`}>
          <button type="button" className="btn btn-info">{category.name}</button>
        </Link>
      </div>
    ))
  }

  render() {
    return(
      <div className="jumbotron element-jumbotron-style">
        { this.renderRows() }
      </div>
    )
  } 
}

const mapStateToProps = state => ({ category: state.categories.categories})
const mapDispatchToProps = (dispatch) => ({ 
  searchCategories: bindActionCreators(searchCategories, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Categories)
