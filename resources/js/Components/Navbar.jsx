import { Link } from '@inertiajs/inertia-react';

const Navbar = ({ user }) => {
    console.log('isUser?', user)
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Hunian</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Cari" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    {!user ?
                    <>
                    <li><Link href='login'>Login</Link></li>
                    </>
                    :
                    <>
                    <li>
                    <Link href='dashboard' className="justify-between">
                        Dashboard
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li><Link href='logout' method='post'>Logout</Link></li>
                    </>
                    }
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar