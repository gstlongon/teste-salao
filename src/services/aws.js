const AWS = require('aws-sdk')

module.exports = {
    IAM_USER_KEY: '',
    IAM_USER_SECRET: '',
    BUCKET_NAME: '',
    AWS_REGION: '',
    uploadtoS3: function(file, filename, acl = 'public-read') {
        let IAM_USER_KEY = this.IAM_USER_KEY
        let IAM_USER_SECRET = this.IAM_USER_SECRET
        let BUCKET_NAME = this.BUCKET_NAME

        let s3bucket = new AWS.S3({
            accessKeiId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            Bucket: BUCKET_NAME
        })

        s3bucket.createBucket(function () {
            const params = {
                Bucket
            }
        })
    }
}