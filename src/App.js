import React from 'react';
import axios from 'axios';
import Layout from './hoc/Layout';
import Jobs from './components/Jobs';
import JobForm from './components/JobForm';

import { API_URL } from './utils/misc';

class App extends React.Component {
  state = {
    bodyRequest: {
      page: 1,
      pageSize: 12,
      category: 'None'
    },
    jobs: [],
    loading: true
  };

  componentDidMount = () => {
    const { page, pageSize, category } = this.state.bodyRequest;
    this.fetchData(page, pageSize, category);
  };

  fetchData = (page, pageSize, category) => {
    axios
      .get(
        `${API_URL}?page=${page}&PageSize=${pageSize}&JobCategory=${category}`
      )
      .then(res => {
        this.setState({ jobs: res.data, loading: false });
      });
  };

  handleInputOnChange = input => {
    let { bodyRequest } = this.state;
    this.setState({
      bodyRequest: {
        ...bodyRequest,
        [input.name]: input.value
      }
    });
  };

  handleApiRequest = () => {
    this.setState({ loading: true });
    const { page, pageSize, category } = this.state.bodyRequest;
    this.fetchData(page, pageSize, category);
  };

  render() {
    const { bodyRequest, jobs, loading } = this.state;
    return (
      <Layout>
        <JobForm
          handleApiRequest={this.handleApiRequest}
          handleInputOnChange={this.handleInputOnChange}
          bodyRequest={bodyRequest}
        />
        <Jobs jobs={jobs} loading={loading} />
      </Layout>
    );
  }
}

export default App;
