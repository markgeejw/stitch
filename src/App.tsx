import type { Component } from 'solid-js';
import Menu from '~icons/eva/menu-fill';
import Add from '~icons/fluent/add-square-multiple-16-filled'

const App: Component = () => {
    return (
        <main data-theme="business">
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <div class="navbar bg-base-100">
                        <div class="flex-none">
                            <label for="my-drawer" class="btn btn-circle btn-ghost">
                                <Menu class="text-xl" />
                            </label>
                        </div>
                        <div class="flex-1">
                            <a class="select-none normal-case font-semibold text-xl px-2">Stitch</a>
                        </div>
                        <div class="flex-none">
                            <button class="btn btn-circle btn-ghost">
                                <Add />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><a>Dashboard</a></li>
                        <li><a>Streams</a></li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default App;
