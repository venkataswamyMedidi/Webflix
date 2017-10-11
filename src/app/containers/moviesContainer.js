import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from "../action/moviesAction";
import {bindActionCreators} from "redux";

import {VideoComponent} from '../components/VideoComponent';
import {ModelDialog} from '../components/ModelDialog';

class moviesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: "default",
            isOpen: false,
            category: "",
            director: "",
            release_year:""


        };
        this.renderMovies = this.renderMovies.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    componentWillMount() {
        this.props.fetchMovies();
    }

    getMovies() {
        return this.props.movies || [];

    }

    onClickMoviesContainer(e, imdbId) {
        e.preventDefault();
        console.log(imdbId);
        this.setState({movieId: imdbId});

    }

    onDialogClose() {
        this.setState({isOpen: false})
    }

    onClickMovieDesc(e, category, director, release_year) {
        this.setState({isOpen: true});
        this.setState({category: category});
        this.setState({director: director});
        this.setState({release_year: release_year});


    }


    renderMovies() {

        return this.getMovies().map((movie, i) => {
            return (
                <div key={i}>
                    <div className="row">
                        <div className="col-xs-6">
                            <a target="_blank" onClick={(e) => (this.onClickMoviesContainer(e, movie.show_id))}><br/>
                                <img src={movie.poster} height="150px" width="200px" alt="MovieImg"/>
                            </a>
                            <br/>
                        </div>
                        <div className="row-center">
                            <div className="col-xs-6 "><br/>
                                <h1>{movie.category}</h1>
                                <button type="button" className="btn btn-primary"
                                        onClick={ (e) => (this.onClickMovieDesc(e, movie.category, movie.director, movie.release_year)) }>
                                    Description
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            );

        })

    }


    render() {
        return (
            <div>
                <ModelDialog isOpen={ this.state.isOpen }
                             closeDialog={ this.onDialogClose.bind(this) }
                             dialogText={ [this.state.category, this.state.director, this.state.release_year] }
                             dialogTitle="Movie Casting"/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-8 video embed-responsive-item">
                            <VideoComponent movieId={this.state.movieId}/>
                        </div>
                        <div className="col-xs-4  movievideolist">
                            {this.renderMovies()}
                        </div>

                    </div>
                </div>
            </div>
        );
    }


}


const mapStateToProps = (state) => {
    return {movies: state.netflixMovies.movies}
};

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({fetchMovies}, dispatch);


};

export default connect(mapStateToProps, mapDispatchToProps)(moviesContainer);



