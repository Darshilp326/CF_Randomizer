import axios from 'axios';
import choices from './getTags';

const getProblem = async (tags, minm, maxm) => {
  console.log(tags);
  const topics = tags.length
    ? tags.reduce((prev, current, index) => {
        return `${prev};${current}`;
      })
    : choices[Math.floor(Math.random() * choices.length)];
  console.log(topics);
  const data = await axios.post(
    `https://codeforces.com/api/problemset.problems?tags=${topics}`
  );
  //   if (data.status !== 'OK') {
  //     throw new Error('Server issue');
  //   }
  let { problems } = data.data.result;
  const { problemStatistics } = data.data.result;
  //   console.log({ problems, problemStatistics });
  problems = problems.filter((problem) => {
    return problem.rating >= minm && problem.rating <= maxm;
  });
  if (problems.length === 0) {
    throw new Error('No problems found!');
  }
  return problems[Math.floor(Math.random() * problems.length)];
};

export default getProblem;
