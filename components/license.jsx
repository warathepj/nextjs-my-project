import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function LicenseRender({
  name,
  version,
  description,
  permissions,
  limitations,
  conditions,
  fullText
}) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription>Version: {version}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <h3 className="font-semibold mb-2">การอนุญาต</h3>
            <div className="flex flex-wrap gap-2">
              {permissions.map((permission, index) => (
                <Badge key={index} variant="secondary">{permission}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">ข้อจำกัด</h3>
            <div className="flex flex-wrap gap-2">
              {limitations.map((limitation, index) => (
                <Badge key={index} variant="destructive">{limitation}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Conditions</h3>
            <div className="flex flex-wrap gap-2">
              {conditions.map((condition, index) => (
                <Badge key={index} variant="outline">{condition}</Badge>
              ))}
            </div>
          </div>
        </div>
        
        <h3 className="font-semibold mb-2">ใบอนุญาตซอฟต์แวร์ฉบับเต็ม</h3>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          <pre className="text-sm whitespace-pre-wrap">{fullText}</pre>
        </ScrollArea>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
      </CardFooter>
    </Card>
  )
}
