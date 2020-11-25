import React, { Component } from 'react'
import { getUsers, getOrganizations } from "../../api";
import Loader from '../Loader/Loader'
import Button from '../Button/Button'
import './UserList.css'

export default class UserList extends Component {

    state = {
        loading: true,
        selectOrg: null,
        // Данные пользователей с сервера *
        users: [],
        // Данные организаций с сервера *
        orgs: [],
        // Массив под рендер с пользователями и организациями *
        usersRender: []
    }

    // Поиск по ключу объекта в массиве (возвращаем нужное значение getValue, если искомый ключ и значение имеется) *
    findWithKey(array, key, value, getValue) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i][getValue];
            }
        }
        // Если нет такого ключа *
        return -1;
    }

    componentDidMount() {
        getUsers()
            .then((users) => this.setState({
                users: users,
            })).then(() => getOrganizations())
            .then((orgs) => this.setState({
                orgs: orgs,
            }))
            .then(() => {
                this.renderUserArr()
            }).then(() => {
                this.setState({
                    loading: false
                })
            })
    }

    // Формируем массив пользователей под рендер *
    renderUserArr = () => {
        const usersRender = []

        this.state.users.forEach((item) => {
            usersRender.push({
                name: item.name,
                org: this.findWithKey(this.state.orgs, 'id', item.organizaiton, 'name'),
                orgId: this.findWithKey(this.state.orgs, 'id', item.organizaiton, 'id')
            })
        });

        this.setState({
            usersRender: usersRender
        })

        // Проверяем активна ли сортировка *
        if (this.state.selectOrg) {
            this.setState({
                selectOrg: null
            })
        }
    }

    // Сортировка по организациям *
    sortOrg = (orgId) => {
        const users = [...this.state.usersRender]
        const filteredUsers = users.filter(item => item.orgId === orgId);
        this.setState({
            usersRender: filteredUsers,
            selectOrg: true
        })
    }

    // Элементы li списка user-list *
    renderLists = () => {
        return this.state.usersRender.map((list, index) => {
            // ID организации передаем параметром в sortOrg *
            const orgId = list.orgId

            return (
                <li
                    key={index}
                    className="user-list__item"
                >
                    <span>Name: {list.name}</span>
                    <span onClick={() => this.sortOrg(orgId)}>Org: <i>{list.org}</i></span>
                </li>
            )
        })
    }

    // Рендер компонента *
    render() {
        const isLoggedIn = this.state.selectOrg;

        // Прелоудер *
        if (this.state.loading) {
            return <Loader />
        }

        return (
            <React.Fragment>
                <ul className="user-list">
                    {this.renderLists()}
                </ul>

                {/* Рендерим кнопку если активировали сортировку */}
                {isLoggedIn ? <Button onClick={this.renderUserArr}> Сбросить фильтр </Button> : null}

            </React.Fragment>
        )
    }
}