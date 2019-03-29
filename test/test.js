const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const assert = chai.assert
const should = chai.should

chai.use(chaiHttp)

const url = 'http://localhost:3000'
const requester = chai.request.agent(url)

const index = require('../index')
const app = require('../app')
const db = require('../app/model/db')
const Comment = require('../app/model/comment')
const User = require('../app/model/user')

const CommentRouter = require('../app/routes/comment')
const UserRouter = require('../app/routes/user')

const UserController = require('../app/controller/user')
const commentController = require('../app/controller/comment')

const access = require('../app/middleware/access')

describe('Testing Comment API', done => {
  // this.timeout(5000);
  // =============================================================== USER TESTS ==========================================================//
  const new_user = {
    name: 'William',
    role: 3
  }

  it('Insert a User to a db', done => {
    User.createUser(new_user, (err, res) => {
      expect(res.affectedRows).is.greaterThan(0)
      done()
    })
  })

  it('Checks if the db is populated', done => {
    User.getData((err, res) => {
      console.log(res)
      done()
    })
  })

  /**
   * Will Fail if the db has no user with Id 2
   */
  it('Get role of a User', done => {
    setTimeout(() => {
      User.getUser(1, (err, res) => {})
    })
    User.getUser(1, (err, res) => {
      setTimeout(() => {
        console.log(res.role)
        expect(res.role).is.equal(1)
        done()
      }, 5000)
      console.log(res.role)
    })
  })

  it('Updates logged_in when a user Logs In', done => {
    User.logInUser(2, (err, res) => {
      // console.log(res);
      expect(res.affectedRows).is.greaterThan(0)
      done()
      // expect(res).is.deep.equal()
    })
  })

  //= ========= Testing User Controller ===/
  const new_user2 = {
    name: 'Eze',
    role: 2
  }

  it('should add a new user to the list via controller', done => {
    requester
      .post('/users/')
      .send(new_user2)
      .end((err, res) => {
        expect(res).to.have.status(201)
        done()
      })
  })

  const id = 2
  // it('Gets the User using Controller', done => {
  //   requester.get('/users/1').end((err, res) => {
  //     expect(res).to.have.status(200)
  //     done()
  //   })
  // })

  it('Logs in User from Controller', done => {
    requester.post('/users/login/' + id).end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
    // done()
  })

  // done()

  const new_comment = {
    comment: 'New Comment',
    author: 1,
    created_at: new Date()
  }

  const new_comment2 = {
    comment: 'New Comment',
    created_at: new Date()
  }

  it('Insert a comment to a db', done => {
    Comment.createComment(new_comment, (err, res) => {
      expect(res.affectedRows).is.greaterThan(0)
      done()
    })
  })

  // it('Throw err when insert into Comment table', done => {
  //   Comment.createComment(new_comment2, (err, res) => {
  //     expect(function () {
  //       throw err
  //     }).to.throw(
  //       Error,
  //       "ER_NO_DEFAULT_FOR_FIELD: Field 'author' doesn't have a default value"
  //     )
  //     done()
  //   })
  // })

  it('Get Comments By User Id', done => {
    Comment.getCommentByUser(1, (err, res) => {
      expect(res.length).is.greaterThan(0)
      done()
    })
  })

  it('Returns None if User Id has nothing', done => {
    Comment.getCommentByUser('qeqwe', (err, res) => {
      // console.log(err);
      done()
    })
  })

  const update_comment = {
    comment: 'New Updated Comment 95'
  }

  /**
   * You need to Edit the id of the comment being edited
   */
  it('Edit a Comment ', done => {
    Comment.editById(1, update_comment, (err, res) => {
      // console.log(err);
      expect(res.affectedRows).is.greaterThan(0)
      done()
    })
  })

  /**
   * You need to Update the id the comment to be deleted After running every npm run test
   */
  it(' Deleting a Comment', done => {
    Comment.remove(2, (err, res) => {
      expect(res.affectedRows).is.greaterThan(0)
      done()
    })
  })

  //= ========= Comment Router & Comment Controller ==================//
  const new_comment3 = {
    comment: 'New Comment 13',
    author: 1
  }

  it('should add a new comment to the list via controller', done => {
    requester
      .post('/comments/')
      .send(new_comment3)
      .end((err, res) => {
        expect(res).to.have.status(201)
        done()
      })
  })

  it('should get comments by author', done => {
    requester.get('/comments/user/1').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })

  /**
   * Comment Id needs to be updated so as the test to pass
   */

  it('should delete a comment from a list ', done => {
    requester.delete('/comments/4/4').end((err, res) => {
      if (err) done(err)
      expect(res).to.have.status(200)
      done()
    })
  })

  const update_comment2 = {
    comment: 'New Updated Comment'
  }
  it('should update a comment using id in Controller ', done => {
    requester
      .put('/comments/1/4')
      .send(update_comment2)
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200)
        done()
      })
  })
})
