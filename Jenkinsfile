pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('server') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('server') {
                    bat 'docker build -t kidlearn-backend:v1 .'
                }
            }
        }
    }
}