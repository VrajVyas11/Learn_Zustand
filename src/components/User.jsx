import { UserIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useStore } from '@/store/store';

export function User() {
	const { setAddress, address, fullName, userName, fetchUser } = useStore(
		useShallow((state) => ({
			fullName: state.fullName,
			userName: state.userName,
			address: state.address,
			setAddress: state.setAddress,
			fetchUser: state.fetchUser,
		}))
	);

	useEffect(() => {
		async function fetchData() {
			await fetchUser();
		}

		fetchData();
	}, [fetchUser]);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="secondary" size="icon">
					<UserIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="overflow-auto border-[#003b00] space-y-4 w-96 bg-[#06090e] text-white p-4 rounded-lg">
				<div className="flex flex-col gap-2">
					<div className="flex flex-col items-center gap-2">
						<p className="font-bold">{fullName}</p>
						<p className="text-sm text-gray-400">{userName}</p>
					</div>
					<Label htmlFor="address" className="text-sm">
						Your Address:
					</Label>
					<Input
						id="address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						className="bg-gray-800 text-white placeholder-gray-400"
						placeholder="Enter your address"
					/>
				</div>
			</PopoverContent>
		</Popover>
	);
}
