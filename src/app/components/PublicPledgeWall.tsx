import { Heart } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export interface PublicPledge {
  pledgeId: string;
  name: string;
  date: string;
  state: string;
  profile: string;
  heartRating: number;
}

interface PublicPledgeWallProps {
  pledges: PublicPledge[];
}

export function PublicPledgeWall({ pledges }: PublicPledgeWallProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-2">Public Pledge Wall</h2>
        <p className="text-center text-gray-600 mb-8">
          See who's joined the movement for climate action
        </p>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-emerald-50">
                  <TableHead>Pledge ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>Profile</TableHead>
                  <TableHead>Love for Planet</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pledges.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                      No pledges yet. Be the first to take the pledge!
                    </TableCell>
                  </TableRow>
                ) : (
                  pledges.map((pledge) => (
                    <TableRow key={pledge.pledgeId} className="hover:bg-gray-50">
                      <TableCell className="font-mono text-sm">{pledge.pledgeId}</TableCell>
                      <TableCell>{pledge.name}</TableCell>
                      <TableCell>{pledge.date}</TableCell>
                      <TableCell>{pledge.state}</TableCell>
                      <TableCell>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm">
                          {pledge.profile}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Heart
                              key={i}
                              className={`w-4 h-4 ${
                                i < pledge.heartRating
                                  ? "text-red-500 fill-red-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {pledges.length > 0 && (
          <p className="text-center text-sm text-gray-500 mt-4">
            Showing {pledges.length} pledge{pledges.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    </section>
  );
}
