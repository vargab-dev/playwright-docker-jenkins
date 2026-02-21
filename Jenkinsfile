pipeline {
    agent any

    stages {

        stage('Verify Docker') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t playwright-api-tests .'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker run --rm playwright-api-tests'
            }
        }
    }
}